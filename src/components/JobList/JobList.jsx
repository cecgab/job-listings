import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import JobPost from "../JobPost/JobPost";
import styles from "./JobList.module.scss";

export default function JobList({ ads }) {
  const [jobList, setJobList] = useState([]);
  const { filters } = useContext(FilterContext);

  /*
   Hook used to filter the list of jobs, if any filter is active
  */
  useEffect(() => {
    if (filters && filters.length) {
      setJobList(
        ads.filter((job) => {
          let toInclude = true;

          /*
            Loop through the active filters and check whether the job adv should be included
          */
          filters.forEach((filter) => {
            const value = job[filter.cat];
            if (toInclude) {
              if (Array.isArray(value)) {
                toInclude = value.includes(filter.title);
              } else {
                toInclude = value == filter.title;
              }
            }
          });

          return toInclude;
        })
      );
    } else setJobList(ads);
  }, [filters]);

  return (
    <div className={styles.list}>
      {jobList.map((el) => {
        const {
          logo,
          company,
          position,
          featured,
          postedAt,
          contract,
          location,
          role,
          level,
          languages,
          tools,
        } = el;
        const details = [postedAt, contract, location].filter(Boolean);
        const categories = [
          ...(role ? [{ title: role, cat: "role" }] : ""),
          ...(level ? [{ title: level, cat: "level" }] : ""),
          ...(languages && Array.isArray(languages)
            ? languages.map((el) => ({
                title: el,
                cat: "languages",
              }))
            : ""),
          ...(tools && Array.isArray(tools)
            ? tools.map((el) => ({
                title: el,
                cat: "tools",
              }))
            : ""),
        ];
        return (
          <div key={el.id} className={styles.list__item}>
            <JobPost
              logo={logo}
              company={company}
              position={position}
              isNew={el.new}
              isFeatured={featured}
              details={details}
              categories={categories}
            />
          </div>
        );
      })}
    </div>
  );
}

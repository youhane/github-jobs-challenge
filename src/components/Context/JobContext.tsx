import { createContext, useEffect, useState } from "react";

export const JobContext = createContext<any>(null);

export const JobProvider = (props: any) => {
    const [jobs, setJobs] = useState(null)
    const BASE_URL = 'https://www.arbeitnow.com/api/job-board-api'

    useEffect(() => {
        fetch(BASE_URL).then(res => res.json())
            .then(data => {console.log(data.data); setJobs(data.data)})
    }, [])

    return (
        <JobContext.Provider value={{ jobs }}>
            {props.children}
        </JobContext.Provider>
    )
}
export default function MatchCard( {home , away , score , league , venue , timestamp } ){
    return(
        <div className="relative bg-white m-2 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div><span className = "xl font-bold" >{home}</span> vs <span className = "xl font-bold" >{away}</span></div>
            <div> <span className="xl font-bold" >{`${score} - (${timestamp}')`}</span></div>
            <p>{league}</p>
            {/* <p>{venue}</p> */}
        </div>
    )
}
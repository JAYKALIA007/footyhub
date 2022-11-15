export default function DisplayTeamInfo( {teamInfo , showModal , toggleShowModal} ){

    return(
        <div>
            {/* {console.log(teamInfo)} */}
            {/* Modal code starts */}
            <>
                {showModal ? (
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-4xl">
                            <div className="border-0 rounded-lg drop-shadow-2xl relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-10">
                                <h3 className="text-3xl font=semibold">Team Info</h3>
                                <button
                                    className="bg-transparent border-0 text-black float-right"
                                    onClick={() => toggleShowModal(false)}
                                >
                                    {/* <span className="text-black font-bold text-xl px-2 pb-1 mx-auto bg-sky-100 rounded-full hover:bg-sky-200 ">
                                    x
                                    </span> */}
                                </button>
                                </div>

                                <div>
                                    <h5>Name - {teamInfo.team.name}</h5>
                                    <h5>Country - {teamInfo.team.country}</h5>
                                    <h5>Founded - {teamInfo.team.founded}</h5>
                                    <img className="h-20 w-20 mx-auto mt-5 rounded-xl" src={teamInfo.team.logo} alt={`${teamInfo.team.name}'s logo`}  />
                                </div>
                                
                                <div className="flex items-center justify-end p-6 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 bg-sky-100 hover:bg-sky-200"
                                    type="button"
                                    onClick={() => toggleShowModal(false)}
                                >
                                    Close
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </>
        </div>
    )

}
export const Forms = () =>{
    return(
        <div className="flex flex-col w-full h-auto">
            <form className="flex flex-col w-full gap-2">
                <input className="outline-none ring-1 w-full rounded-sm ring-[#DBDBDB] p-[9px] placeholder:text-[#737373] text-xs items-center placeholder:font-light placeholder:text-[0.65rem] " placeholder="Phone number, username, or email" type="text"></input>
                <input className="outline-none ring-1 w-full rounded-sm ring-[#DBDBDB] p-[9px] placeholder:text-[#737373] text-xs items-center placeholder:font-light placeholder:text-[0.65rem] " placeholder="Password" type="password"></input>
                <button className="flex w-full p-[9px] text-xs font-semibold  rounded-md justify-center items-center transition-colors hover:bg-[#38A4EA] bg-[#4CB5F9] text-white" type="submit">Log in</button>
            </form>
        </div>
    )
}
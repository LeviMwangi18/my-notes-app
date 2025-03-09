
function Header(){
    return(
        <header class="flex p-5 bg-orange-500 justify-evenly items-center">
            <h1 class="text-2xl font-extrabold">
               My Notes
            </h1>
            <div className="search-bar" class="bg-slate-300 p-1 flex gap-3 items-center br-10">
                <i class="fa-solid fa-search"></i>
                <input type="text" placeholder="search" class="placeholder:text-md placeholder:text-zinc-950 bo"/>
            </div>
            <div className="user">
                <i class="fa-solid fa-user"></i>
            </div>
        </header>
    );
}

export default Header;
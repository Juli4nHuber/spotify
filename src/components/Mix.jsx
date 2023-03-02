
export default function Mix({name , image}){
    return (
    <div className="flex flex-col bg-neutral-700 w-[200px] h-[290px] rounded-lg overflow-hidden">
        <img className="mx-4 mt-4 rounded-md" src={ image }/>
        <div className="text-slate-400 p-4">
            <h5 className="font-bold whitespace-nowrap text-ellipsis text-white overflow-hidden">This is {name}</h5>
            <p className="text-slate-400 text-ellipsis overflow-hidden text-sm mt-1">This is: {name}. Sus mejores éxitos, todos en una playlist.</p>
        </div>
    </div>
    );
}


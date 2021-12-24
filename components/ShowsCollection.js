
import ShowThumbnail from "./ShowThumbnail";

function ShowsCollection({ results, title }) {
    return (
        <div className="flex flex-col space-y-2 my-8 px-8 max-w-[1400px] mx-auto">
            <h2 className="font-semibold">{title}</h2>
            <div className="flex p-2 -m-2 space-x-6 overflow-x-scroll overflow-y-hidden scrollbar-hide">
                {results.map((result) => (
                    <ShowThumbnail key={result.id} result={result} />
                ))}
            </div>
        </div>
    );
}

export default ShowsCollection;
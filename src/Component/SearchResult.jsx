export default function SearchResult({ searchResult }) {
    return (
        <div>
            {searchResult.length || searchResult === undefined > 0 ? (
                searchResult.map((product) => (
                    <div
                        className="w-48 h-48 absolute rounded-lg rounded-t-sm bg-zinc-100 search-result"
                        key={product.id}
                    >
                        <div className="flex flex-col justify-between p-2">
                            <span className="flex justify-between items-center gap-1">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-20 h-20 rounded-lg rounded-t-sm"
                                />
                                <span className="flex flex-col items-center">
                                    <p className="text-xs font-medium text-black">
                                        {product.name}
                                    </p>
                                    <p className="text-xs font-medium text-black">
                                        {product.price}
                                    </p>
                                </span>
                            </span>
                            <span className="flex flex-col items-center pt-2">
                                <p className="text-xs text-black">
                                    {product.imageAlt}
                                </p>
                            </span>
                        </div>
                    </div>
                ))
            ) : (
                <div></div>
            )}
        </div>
    );
}

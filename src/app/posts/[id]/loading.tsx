export default function Loading() {

    return (<>
        <main className="p-4 max-w-2xl mx-auto">
            <div className="animate-pulse space-y-4">
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-2">Loading comments...</h3>
            <ul className="space-y-4">
                <li className="bg-gray-100 p-4 rounded animate-pulse h-20"/>
                <li className="bg-gray-100 p-4 rounded animate-pulse h-20"/>
                <li className="bg-gray-100 p-4 rounded animate-pulse h-20" />
            </ul>
        </main>
    </>)
}
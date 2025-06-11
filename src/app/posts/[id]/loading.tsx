export default function Loading() {

    return (<>
        <main className="p-4 max-w-2xl mx-auto">
            <div className="animate-pulse space-y-4">
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
        </main>
    </>)
}
import { TriangleAlert } from "lucide-react";

const OfflineBanner = () => {
    return (
        <div className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-700 dark:text-yellow-400 rounded-lg px-4 py-3 flex gap-3 items-start max-w-3xl mx-auto">
            <TriangleAlert className="h-5 w-5 mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed">
                <span className="font-semibold">Heads up:</span> The backend and database for this app are currently offline.
                The site is kept alive as a static showcase only. This is a personal project and full functionality is not available at this time.
            </p>
        </div>
    );
};

export default OfflineBanner;

import { Skeleton } from "@/components/ui/skeleton"

export default function SurveyLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="container mx-auto px-3 md:px-6 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header skeleton */}
          <div className="mb-6 flex items-center justify-between">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>

          {/* Progress bar skeleton */}
          <Skeleton className="h-2 w-full mb-8" />

          {/* Form skeleton */}
          <div className="bg-white dark:bg-zinc-900/50 rounded-lg p-6 border border-gray-200/50 dark:border-zinc-800/50 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Skeleton className="h-6 w-6 rounded-full mr-2" />
                <Skeleton className="h-6 w-32" />
              </div>

              {/* Form fields skeletons */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}

              {/* Radio options skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-5 w-48" />
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-10 w-full" />
                  ))}
                </div>
              </div>

              {/* Buttons skeleton */}
              <div className="flex justify-between pt-4 mt-4 border-t border-gray-200 dark:border-zinc-700">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

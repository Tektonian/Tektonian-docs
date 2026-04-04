import * as React from "react"

type AnalyticsValue = string | number | boolean | null | undefined

export type AnalyticsProperties = Record<string, AnalyticsValue>
export type AnalyticsCapture = (event: string, properties?: AnalyticsProperties) => void
export type TrackProps = {
  trackId?: string
  trackEvent?: string
  trackProperties?: AnalyticsProperties
}

const AnalyticsContext = React.createContext<AnalyticsCapture | null>(null)

function AnalyticsProvider({
  capture,
  children,
}: {
  capture: AnalyticsCapture | null
  children: React.ReactNode
}) {
  return (
    <AnalyticsContext.Provider value={capture}>
      {children}
    </AnalyticsContext.Provider>
  )
}

function useAnalytics() {
  return React.useContext(AnalyticsContext)
}

function resolveAnalyticsEvent(trackId?: string, trackEvent?: string) {
  return trackEvent ?? trackId ?? null
}

export { AnalyticsProvider, resolveAnalyticsEvent, useAnalytics }

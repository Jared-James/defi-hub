export const GA_TRACKING_ID = "G-K7FVL440HM"

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value, userId }) => {
  if (typeof window !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      user_id: userId,
      value
    })
  }
}

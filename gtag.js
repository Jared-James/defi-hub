export const GA_TRACKING_ID = "G-K7FVL440HM"

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value, USER_ID }) => {
  if (typeof window !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      user_id: USER_ID,
      value
    })
  }
}

export const config = ({ USER_ID, action }) => {
  if (typeof window !== "undefined") {
    window.gtag("config", action, {
      user_id: USER_ID
    })
  }
}

function timeDifference(current, previous)
{
    const milliSecondsPerMinute = 60 * 1000
    const milliSecondsPerHour = milliSecondsPerMinute * 60
    const milliSecondsPerDay = milliSecondsPerHour * 24
    const milliSecondsPerMonth = milliSecondsPerDay * 30
    const milliSecondsPerYear = milliSecondsPerDay * 365

    const elapsed = current - previous

    if (elapsed < milliSecondsPerMinute / 3)
    {
        return 'Justo ahora'
    }

    if (elapsed < milliSecondsPerMinute)
    {
        return 'Menos de un minuto atras'
    }
    else if (elapsed < milliSecondsPerHour)
    {
        return Math.round(elapsed / milliSecondsPerMinute) + ' minutos atras'
    }
    else if (elapsed < milliSecondsPerDay)
    {
        return Math.round(elapsed / milliSecondsPerHour) + ' h atras'
    }
    else if (elapsed < milliSecondsPerMonth)
    {
        return Math.round(elapsed / milliSecondsPerDay) + ' dias atras'
    }
    else if (elapsed < milliSecondsPerYear)
    {
        return Math.round(elapsed / milliSecondsPerMonth) + ' meses atras'
    }
    else {
      return Math.round(elapsed / milliSecondsPerYear) + ' años atras'
    }
}

export function timeDifferenceForDate(date)
{
    const now = new Date().getTime()
    const updated = new Date(date).getTime()
    return timeDifference(now, updated)
}

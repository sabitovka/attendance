package com.sabkar.attendance.common;

import lombok.experimental.UtilityClass;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

@UtilityClass
public class Utils {
    public LocalDate convertToLocalDateViaInstant(Date dateToConvert) {
        /*
         * 2. Converting java.util.Date to java.time.LocalDate
         * https://www.baeldung.com/java-date-to-localdate-and-localdatetime#date-localdate
         */
        return dateToConvert.toInstant()
            .atZone(ZoneId.systemDefault())
            .toLocalDate();
    }

    public String dateToString(Date date, String pattern) {
        SimpleDateFormat DateFor = new SimpleDateFormat(pattern);
        return DateFor.format(date);
    }
}

package com.cityguesthouse.cgh.enums;

public enum BookingEnum {
    PENDING("pending"),
    PROCESSING("processing"),
    CANCEL("cancel"),
    COMPLETED("completed");

    private final String value;

    BookingEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}

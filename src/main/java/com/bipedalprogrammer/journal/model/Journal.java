package com.bipedalprogrammer.journal.model;

import java.util.Date;
import java.util.List;

/**
 * Model a journal.
 */
public class Journal {
    private String name;
    private Date created;
    private List<Entry> entries;
}

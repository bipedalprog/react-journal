package com.bipedalprogrammer.journal.controller;

import com.bipedalprogrammer.journal.model.Journal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by bipedal on 2/15/17.
 */
@RestController
@RequestMapping(path="/journal")
public class JournalController {

    @RequestMapping(path="/", method=RequestMethod.GET)
    public List<Journal> getJournals() {
        return new ArrayList<Journal>();
    }
}

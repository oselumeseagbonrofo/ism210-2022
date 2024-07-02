/** Here we illustrate useEffect for fetching remote data at mount time and event driven
occasion */
import React, { useState, useEffect } from 'react';
import ShowNotes from './ShowNotes';
import notes  from './type-defs';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite/legacy";



const Component8: React.FC = () => {      
    const db = SQLite.openDatabase("notes.db");

    useEffect(() => {
        db.transaction((tx) => {
          tx.executeSql(
            "create table if not exists notes (id integer primary key not null, title text, body text);"
          );
        });
      }, []);
}

export default Component8;

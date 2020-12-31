#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Aug 19 14:59:21 2020

@author: fsadeque
"""


import pandas as pd

file_dir = '../BUET_07_database_dec-31.xlsx'

xl = pd.ExcelFile(file_dir)

sheet_names = xl.sheet_names[2:]

df_out = pd.DataFrame()

for sheet in sheet_names:
    df = pd.read_excel(file_dir, sheet_name = sheet, converters={'Roll no.':str, 'Mobile no.': str})
    df_temp = df[df.columns[0:4]]
    print(df_temp.dtypes)
    df_out = pd.concat([df_out, df_temp], ignore_index=True)


df_out.to_csv('../BUET_07_database.csv', index=False)
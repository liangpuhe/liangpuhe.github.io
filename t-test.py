import pandas
import saspy
import scipy
from scipy import stats
import numpy


url = 'NHATS_R6_Final_Release_STATA_V2/NHATS_Round_6_SP_File_V2.dta'
names = ['dt6getoplcs1','dt6getoplcs2','dt6getoplcs3','dt6getoplcs4','dt6getoplcs5','dt6getoplcs6','dt6getoplcs7']
stata_file = pandas.read_stata(url)
df = stata_file[(stata_file.ss6glasseswr == '7 BLIND') | (stata_file.ss6glasseswr == '1 YES')]

df_n = stata_file[(stata_file.ht6spacename == '91 SOMETHING ELSE (SPECIFY)')]
df['cheerful'] = df['wb6offelche1'].astype(str).str[0].apply(pandas.to_numeric, errors='coerce').fillna(0)
df['fulloflife'] = df['wb6offelche3'].astype(str).str[0].apply(pandas.to_numeric, errors='coerce').fillna(0)

df['bored'] = df['wb6offelche2'].astype(str).str[0].apply(pandas.to_numeric, errors='coerce').fillna(0)
df['bored_c'] = 6 - df['bored']
df['upset'] = df['wb6offelche4'].astype(str).str[0].apply(pandas.to_numeric, errors='coerce').fillna(0)
df['upset_c'] = 6 - df['upset']

df['wellbeing'] = df['cheerful'] + df['fulloflife'] + df['bored_c'] + df['upset_c']

df_email = df[(df.te6emailtext == '1 YES')]
df_no_email = df[(df.te6emailtext == '2 NO')]
# df = df[names]
# df[df < 0] = 0
# msk = df.dtypes == numpy.object


print(df_n['ht6spacename'].head(20))
print(stats.ttest_ind(df_email['wellbeing'],df_no_email['wellbeing']))
# print(stats.ttest_ind(df_email['new_num_2'],df_no_email['new_num_2']))

print("email mean:")
print(df_email['wellbeing'].mean())
print("no email mean:")
print(df_no_email['wellbeing'].mean())

# description = data.describe()
# shape = data.shape
# peek = data.head(20)
# print(stata_file.describe())
# pandas.set_option("display.width", 100)
# pandas.set_option("precision", 3)

import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
# import matplotlib.pyplot as plt

raindata = pd.read_csv(r"G:\First Hackathon\Hack_UnOff\rainfall in india 1901-2015.csv")
print(raindata.head())

print(raindata.columns)
print(set(raindata['SUBDIVISION']))

valid_states_rain = raindata[(raindata['SUBDIVISION']=='BIHAR') | (raindata['SUBDIVISION']=='KERALA') | (raindata['SUBDIVISION']=='ARUNACHAL PRADESH')|(raindata['SUBDIVISION']=='TAMIL NADU')|(raindata['SUBDIVISION']=='JAMMU & KASHMIR')|(raindata['SUBDIVISION']=='UTTARAKHAND')|(raindata['SUBDIVISION']=='ORISSA')|(raindata['SUBDIVISION']=='HIMACHAL PRADESH')|(raindata['SUBDIVISION']=='LAKSHADWEEP')|(raindata['SUBDIVISION']=='PUNJAB')|(raindata['SUBDIVISION']=='CHHATTISGARH')|(raindata['SUBDIVISION']=='ANDAMAN & NICOBAR ISLANDS')|(raindata['SUBDIVISION']=='JHARKHAND')]


print(set(valid_states_rain['SUBDIVISION']))
print(valid_states_rain.head())
valid_states_rain = valid_states_rain[['SUBDIVISION','YEAR','ANNUAL']]
print(valid_states_rain.head())
print(valid_states_rain.describe())

valid_states_rain = valid_states_rain[valid_states_rain['YEAR']>1996]

valid_states_rain.columns = ['State','Year','Rainfall']

cropdata = pd.read_csv(r"G:\First Hackathon\Hack_UnOff\crop_production.csv")

print(set(cropdata['State_Name']))

valid_states_crop = cropdata[(cropdata['State_Name'] == 'Bihar') | (cropdata['State_Name'] == 'Kerala') | (cropdata['State_Name'] == 'Arunachal Pradesh') | (cropdata['State_Name'] == 'Tamil Nadu') | (cropdata['State_Name'] == 'Jammu and Kashmir ') | (cropdata['State_Name'] == 'Uttarakhand') | (
    cropdata['State_Name'] == 'Odisha') | (cropdata['State_Name'] == 'Himachal Pradesh') | (cropdata['State_Name'] == 'Punjab') | (cropdata['State_Name'] == 'Chhattisgarh') | (cropdata['State_Name'] == 'Andaman and Nicobar Islands') | (cropdata['State_Name'] == 'Jharkhand')]

print(set(valid_states_crop['State_Name']))
print(set(valid_states_rain['State']))

valid_states_rain = valid_states_rain[valid_states_rain.State != 'LAKSHADWEEP']
valid_states_crop = valid_states_crop.replace('Jammu and Kashmir ','Jammu and Kashmir')
valid_states_rain = valid_states_rain.replace('UTTARAKHAND','Uttarakhand')
valid_states_rain = valid_states_rain.replace('ORISSA','Odisha')
valid_states_rain = valid_states_rain.replace('HIMACHAL PRADESH','Himachal Pradesh')
valid_states_rain = valid_states_rain.replace('JHARKHAND','Jharkhand')
valid_states_rain = valid_states_rain.replace('ARUNACHAL PRADESH','Arunachal Pradesh')
valid_states_rain = valid_states_rain.replace('TAMIL NADU','Tamil Nadu')
valid_states_rain = valid_states_rain.replace('CHHATTISGARH','Chhattisgarh')
valid_states_rain = valid_states_rain.replace('JAMMU & KASHMIR','Jammu and Kashmir')
valid_states_rain = valid_states_rain.replace('ANDAMAN & NICOBAR ISLANDS','Andaman and Nicobar Islands')
valid_states_rain = valid_states_rain.replace('BIHAR','Bihar')
valid_states_rain = valid_states_rain.replace('PUNJAB','Punjab')
valid_states_rain = valid_states_rain.replace('KERALA','Kerala')

print(set(valid_states_crop['State_Name']))
print(set(valid_states_rain['State']))

Rainfall_list = [0]*77189
valid_states_crop['Rainfall'] = Rainfall_list

print(valid_states_crop.head())
print(valid_states_rain.head())

states_set = set(valid_states_crop['State_Name'])
year_set = set(valid_states_crop['Crop_Year'])
print(states_set)
print(year_set)

for state in states_set:
    for year in year_set:
        #print(valid_states_crop[valid_states_crop['State']==state]['Year'])
        if(year in list(valid_states_crop[valid_states_crop['State_Name']==state]['Crop_Year'])):
            #print(state,year)
            valid_states_crop.loc[(valid_states_crop['State_Name']==state) & \
                              (valid_states_crop['Crop_Year']==year),'Rainfall']= \
            list(valid_states_rain[(valid_states_rain['State']==state) & \
                                   (valid_states_rain['Year']==year)]['Rainfall'])[0]


crop_data_alpha = valid_states_crop.dropna()
crop_data_alpha = crop_data_alpha[crop_data_alpha.Production !=0.0]
print(crop_data_alpha.head())
print(set(crop_data_alpha['Crop']))

rop_data_alpha = crop_data_alpha.drop('State_Name',axis = 1)
crop_data_alpha = crop_data_alpha.drop('Crop_Year',axis = 1)
crop_data_alpha = crop_data_alpha.sort_values(by='Crop')
crop_data_alpha = crop_data_alpha.reset_index(drop=True)
print(crop_data_alpha.head())

for index,row in crop_data_alpha.iterrows():
    crop_data_alpha.loc[index,'Production'] = row['Production']/row['Area']
crop_data_alpha.head()

wheat_data = crop_data_alpha[crop_data_alpha['Crop']=='Wheat']
print(len(wheat_data))
print(wheat_data.head())
print(wheat_data[wheat_data['Production']==3.0])

# plt.scatter(wheat_data['Production'],wheat_data['Rainfall'])

potato_data = crop_data_alpha[crop_data_alpha['Crop']=='Potato']
# plt.scatter(potato_data['Production'],potato_data['Rainfall'])

def getData(cropname):
    return crop_data_alpha[crop_data_alpha['Crop']== cropname]



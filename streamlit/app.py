import numpy as np
import pandas as pd
import streamlit as st 

import matplotlib.pyplot as plt
import seaborn as sns

import warnings
warnings.filterwarnings("ignore")

st.set_option('deprecation.showPyplotGlobalUse', False)
st.title("Lets Analysis your data !")
st.write('Dataset should contain normalized-losses, price, horsepower, peak-rpm, bore, stroke and num-of-doors as variable')

uploaded_file = st.file_uploader("Choose a file")
if uploaded_file is not None:
  df_automobile = pd.read_csv(uploaded_file)
  st.text("")
  st.write('Here is the dataset you uploaded')
  st.dataframe(df_automobile)
    
  df_data = df_automobile.replace('?',np.NAN) 
  df_data.isnull().sum()
  df_temp = df_automobile[df_automobile['normalized-losses']!='?']
  normalised_mean = df_temp['normalized-losses'].astype(int).mean()
  df_automobile['normalized-losses'] = df_automobile['normalized-losses'].replace('?',normalised_mean).astype(int)

  df_temp = df_automobile[df_automobile['price']!='?']
  normalised_mean = df_temp['price'].astype(int).mean()
  df_automobile['price'] = df_automobile['price'].replace('?',normalised_mean).astype(int)

  df_temp = df_automobile[df_automobile['horsepower']!='?']
  normalised_mean = df_temp['horsepower'].astype(int).mean()
  df_automobile['horsepower'] = df_automobile['horsepower'].replace('?',normalised_mean).astype(int)

  df_temp = df_automobile[df_automobile['peak-rpm']!='?']
  normalised_mean = df_temp['peak-rpm'].astype(int).mean()
  df_automobile['peak-rpm'] = df_automobile['peak-rpm'].replace('?',normalised_mean).astype(int)

  df_temp = df_automobile[df_automobile['bore']!='?']
  normalised_mean = df_temp['bore'].astype(float).mean()
  df_automobile['bore'] = df_automobile['bore'].replace('?',normalised_mean).astype(float)

  df_temp = df_automobile[df_automobile['stroke']!='?']
  normalised_mean = df_temp['stroke'].astype(float).mean()
  df_automobile['stroke'] = df_automobile['stroke'].replace('?',normalised_mean).astype(float)


  df_automobile['num-of-doors'] = df_automobile['num-of-doors'].replace('?','four')
  
  st.text("")
  st.subheader('Summary statistics of numerical data you provided')
  st.dataframe(df_automobile.describe())
  
    
  st.text("")
  st.text("")
  st.subheader("Relation between every attribute :")
  corr = df_automobile.corr()
  plt.figure(figsize=(20,9))
  a = sns.heatmap(corr, annot=True, fmt='.2f')
  st.pyplot()
  
  st.text("")
  st.text("")
  option = st.selectbox(
     'Select the feature of automobile whose frequency analysis you want to check',
     (df_automobile.columns.values))

  plt.subplot(221)
  df_automobile[option].value_counts(normalize=True).plot(figsize=(10,8),kind='bar',color='red')
  plt.title("Frequency diagram")
  plt.ylabel('Number of '+ option)
  plt.xlabel(option);
  st.pyplot()
  
  st.header("Select which analysis you want to see :")
  col1, col2, col3 = st.columns(3)
  with col1:
    pa = st.button("Price Analysis")
  with col2:
    fa = st.button("Fuel Analysis")
  with col3:
    oa = st.button("Other Analysis")
    
  st.text("")
  st.text("")
  if pa:
    plt.rcParams['figure.figsize']=(23,10)
    ax = sns.boxplot(x="make", y="price", data=df_automobile)
    st.pyplot()
  
    plt.rcParams['figure.figsize']=(19,7)
    ax = sns.boxplot(x="body-style", y="price", data=df_automobile)
    st.pyplot()
  
    sns.catplot(data=df_automobile, x="body-style", y="price", hue="aspiration" ,kind="point")
    st.pyplot()
  
    plt.rcParams['figure.figsize']=(10,5)
    ax = sns.boxplot(x="drive-wheels", y="price", data=df_automobile)
    st.pyplot()
  
  elif fa:
    sns.factorplot(data=df_automobile, x="engine-type", y="engine-size", col="body-style",row="fuel-type")
    st.pyplot()
    g = sns.pairplot(df_automobile[["city-mpg", "horsepower", "engine-size", "curb-weight","price", "fuel-type"]], hue="fuel-type", diag_kind="hist")
    st.pyplot()
  
  elif oa:
    sns.catplot(data=df_automobile, x="num-of-cylinders", y="horsepower",kind="violin")
    st.pyplot()

    sns.catplot(data=df_automobile, y="normalized-losses", x="symboling" , hue="body-style" ,kind="point")
    st.pyplot()

  
import numpy as np
import pandas as pd
import streamlit as st
import matplotlib.pyplot as plt
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
    st.write(df_automobile)
    df_data = df_automobile.replace('?', np.NAN)
    df_data.isnull().sum()
    df_temp = df_automobile[df_automobile['normalized-losses'] != '?']
    normalised_mean = df_temp['normalized-losses'].astype(int).mean()
    df_automobile['normalized-losses'] = df_automobile['normalized-losses'].replace(
        '?', normalised_mean).astype(int)

    df_temp = df_automobile[df_automobile['price'] != '?']
    normalised_mean = df_temp['price'].astype(int).mean()
    df_automobile['price'] = df_automobile['price'].replace(
        '?', normalised_mean).astype(int)

    df_temp = df_automobile[df_automobile['horsepower'] != '?']
    normalised_mean = df_temp['horsepower'].astype(int).mean()
    df_automobile['horsepower'] = df_automobile['horsepower'].replace(
        '?', normalised_mean).astype(int)

    df_temp = df_automobile[df_automobile['peak-rpm'] != '?']
    normalised_mean = df_temp['peak-rpm'].astype(int).mean()
    df_automobile['peak-rpm'] = df_automobile['peak-rpm'].replace(
        '?', normalised_mean).astype(int)

    df_temp = df_automobile[df_automobile['bore'] != '?']
    normalised_mean = df_temp['bore'].astype(float).mean()
    df_automobile['bore'] = df_automobile['bore'].replace(
        '?', normalised_mean).astype(float)

    df_temp = df_automobile[df_automobile['stroke'] != '?']
    normalised_mean = df_temp['stroke'].astype(float).mean()
    df_automobile['stroke'] = df_automobile['stroke'].replace(
        '?', normalised_mean).astype(float)

    df_automobile['num-of-doors'] = df_automobile['num-of-doors'].replace(
        '?', 'four')

    st.text("")
    st.write('Summary statistics of numerical data you provided')
    st.write(df_automobile.describe())

    st.text("")
    option = st.selectbox(
        'Select the feature of automobile whose frequency analysis you want to check',
        (df_automobile.columns.values))

    plt.subplot(221)

    df_automobile[option].value_counts(normalize=True).plot(
        figsize=(10, 8), kind='bar', color='red')
    plt.title("Frequency diagram")
    plt.ylabel('Number of ' + option)
    plt.xlabel(option)
    st.pyplot()

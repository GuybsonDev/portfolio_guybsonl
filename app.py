import streamlit as st
import pandas as pd

# Configurações da página
st.set_page_config(page_title='Portfolio BDev', page_icon='content/user_image.png', initial_sidebar_state='expanded', layout='wide')

# Definir as páginas
pages = [
    st.Page("navigation/bar1.py", title="On", icon=":material/home:"),
    st.Page("navigation/bar2.py", title="Experiences", icon=":material/dataset:"),
    st.Page("navigation/bar3.py", title="Projects", icon=":material/support_agent:")]

pg = st.navigation({"Navigation": pages}, position='sidebar')
pg.run()

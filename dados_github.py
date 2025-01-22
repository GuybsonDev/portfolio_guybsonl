import streamlit as st
import requests

# Função para buscar repositórios do GitHub
def fetch_github_repos(username):
    url = f"https://api.github.com/users/{username}/repos"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()  # Retorna os repositórios como JSON
    else:
        st.error("Não foi possível recuperar os repositórios.")
        return []

# Interface do Streamlit
def main():
    st.title("Portfólio de Repositórios do GitHub")

    # Input do usuário para o nome de usuário do GitHub
    username = st.text_input("Digite seu nome de usuário do GitHub", "seu-usuario")

    if username:
        repos = fetch_github_repos(username)

        if repos:
            st.subheader(f"Repositórios de {username}")
            for repo in repos:
                st.markdown(f"### [{repo['name']}]({repo['html_url']})")
                st.write(repo.get("description", "Sem descrição"))
                st.write(f"⭐ {repo['stargazers_count']} | Forks: {repo['forks_count']}")

if __name__ == "__main__":
    main()

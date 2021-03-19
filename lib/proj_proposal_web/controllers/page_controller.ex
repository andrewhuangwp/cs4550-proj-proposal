defmodule ProjProposalWeb.PageController do
  use ProjProposalWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def experiment(conn, _params) do
    key = "661a68d8b581293f508460301d6cdfe5"
    url = "https://api.themoviedb.org/3/search/movie?api_key=#{key}&language=en-US&query=Parasite"
    case HTTPoison.get(url) do
      {:ok, %{status_code: 200, body: body}} ->
        result = Jason.decode!(body)
        render(conn, "experiment.html", result: result)

      {:ok, %{status_code: 404}} ->
        # do something with a 404
        IO.inspect("404")

      {:error, %{reason: reason}} ->
        # do something with an error
        IO.inspect(reason)
    end
  end
end

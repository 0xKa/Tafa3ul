FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY *.slnx ./

COPY server/Tafa3ul.Api/Tafa3ul.Api.csproj server/Tafa3ul.Api/
COPY server/Tafa3ul.Core/Tafa3ul.Core.csproj server/Tafa3ul.Core/
COPY server/Tafa3ul.Data/Tafa3ul.Data.csproj server/Tafa3ul.Data/
COPY server/Tafa3ul.Domain/Tafa3ul.Domain.csproj server/Tafa3ul.Domain/

RUN dotnet restore ./*.slnx

COPY . .

RUN dotnet publish server/Tafa3ul.Api/Tafa3ul.Api.csproj -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app

COPY --from=build /app/publish ./

ENV ASPNETCORE_URLS=http://0.0.0.0:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "Tafa3ul.Api.dll"]
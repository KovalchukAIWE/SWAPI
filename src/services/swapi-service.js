export default class SwapiService {

    _apiBase = 'https://swapi.dev/api'
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`); //щоб отримати дані із серверу, птрібно виконати два виклики (кожен поверне Promise)
      
      if (!res.ok) { // якщо запиту не існує, то викидаємо помилку
        throw new Error (`Could not fetch ${url}` + `, recieved ${res.status}`)
      }
      return await res.json(); 
    }
    async getAllPeople() {
      const res = await this.getResource(`/people/`)
      return res.results
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`)
      return res.results
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`)
      return res.results
    }
  
    getPerson(id) {
      return this.getResource(`/people/${id}`)
    }
  }
  
  const swapi = new SwapiService()
  
  swapi.getAllPeople(). then((people) => {
    people.forEach((people) => {
      console.log(people.name)
    });
  })
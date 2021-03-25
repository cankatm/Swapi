import { gql } from '@apollo/client';

export const GET_ALL_LIST = gql`
  query GetAllList {
    specieses {
      name
      id
    }
    vehicles {
      name
      id
    }
    persons {
      name
      id
    }
    films {
      title
      id
    }
    planets {
      name
      id
    }
    starships {
      name
      id
    }
  }
`;

export const GET_SPECIES_DETAIL = gql`
  query GetSpeciesDetail($ID: ID!) {
    species(where: { id: $ID }) {
      name
      status
      averageLifespan
      classification
      designation
      language
      averageHeight
      hairColor
      eyeColor
      skinColor
    }
  }
`;

export const GET_VEHICLE_DETAIL = gql`
  query GetVehicleDetail($ID: ID!) {
    vehicle(where: { id: $ID }) {
      name
      status
      model
      crew
      class
      costInCredits
      length
      passengers
      manufacturer
      cargoCapacity
      consumables
      maxAtmospheringSpeed
    }
  }
`;

export const GET_PERSON_DETAIL = gql`
  query GetPersonDetail($ID: ID!) {
    person(where: { id: $ID }) {
      name
      status
      height
      birthYear
      mass
      skinColor
      gender
      eyeColor
      hairColor
    }
  }
`;

export const GET_FILM_DETAIL = gql`
  query GetFilmDetail($ID: ID!) {
    film(where: { id: $ID }) {
      title
      status
      producers
      director
      title
      releaseDate
      openingCrawl
      episodeId
    }
  }
`;

export const GET_PLANET_DETAIL = gql`
  query GetPlanetDetail($ID: ID!) {
    planet(where: { id: $ID }) {
      name
      status
      population
      climate
      orbitalPeriod
      terrain
      gravity
      rotationPeriod
      surfaceWater
      diameter
    }
  }
`;

export const GET_STARSHIP_DETAIL = gql`
  query GetStarshipDetail($ID: ID!) {
    starship(where: { id: $ID }) {
      name
      status
      costInCredits
      hyperdriveRating
      passengers
      cargoCapacity
      crew
      length
      manufacturer
      maxAtmospheringSpeed
      mglt
      consumables
      class
    }
  }
`;

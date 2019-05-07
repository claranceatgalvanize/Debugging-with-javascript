const { expect } = require('chai')
const {
  speciesNames,
  speciesByFamily,
  getFamilyCount,
  findById
} = require('../src')
const beetles = require('./beetles.json')

describe('speciesNames()', function () {
  it('returns an array of species names', function () {
    const actual = speciesNames(beetles)
    const expected = [
      'Anthrenocerus australis',
      'Anthrenus coloratus',
      'Anthrenus flavipes',
      'Anthrenus fuscus',
      'Anthrenus museorum',
      'Anthrenus olgae',
      'Anthrenus pimpinellae',
      'Anthrenus sarnicus',
      'Anthrenus scrophulariae',
      'Anthrenus verbasci',
      'Attagenus brunneus',
      'Attagenus cyphonoides',
      'Attagenus fasciatus',
      'Attagenus pellio',
      'Attagenus smirnovi',
      'Attagenus trifasciatus',
      'Attagenus unicolor',
      'Ctesias serra',
      'Dermestes ater',
      'Dermestes carnivorus',
      'Dermestes frischii',
      'Dermestes haemorrhoidalis',
      'Dermestes lardarius',
      'Dermestes leechi',
      'Dermestes maculatus',
      'Dermestes murinus',
      'Dermestes peruvianus',
      'Dermestes undulatus',
      'Globicornis nigripes',
      'Megatoma undata',
      'Orphinus fulvipes',
      'Reesa vespulae',
      'Thorictodes heydeni',
      'Thylodrias contractus',
      'Trinodes hirtus',
      'Trogoderma angustum',
      'Trogoderma glabrum',
      'Trogoderma granarium',
      'Trogoderma inclusum',
      'Trogoderma variabile',
      'Bostrichus capucinus',
      'Bostrychoplites cornutus',
      'Lyctus brunneus',
      'Lyctus cavicollis',
      'Lyctus linearis',
      'Lyctus planicollis',
      'Lyctus sinensis',
      'Rhyzopertha dominica',
      'Stephanopachys substriatus',
      'Trogoxylon parallelopipedum',
      'Anitys rubens',
      'Anobium inexspectatum',
      'Anobium punctatum',
      'Caenocara affinis',
      'Caenocara bovistae',
      'Dorcatoma ambjoerni',
      'Dorcatoma chrysomelina',
      'Dorcatoma dresdensis',
      'Dorcatoma flavicornis',
      'Dorcatoma serra',
      'Dryophilus anobioides',
      'Dryophilus pusillus',
      'Ernobius abietis',
      'Ernobius angusticollis',
      'Ernobius gigas',
      'Ernobius mollis',
      'Ernobius nigrinus',
      'Ernobius pini',
      'Gastrallus immarginatus',
      'Gibbium aequinoctiale',
      'Gibbium psylloides',
      'Grynobius planus',
      'Hadrobregmus denticollis',
      'Hemicoelus fulvicornis',
      'Hemicoelus nitidus',
      'Lasioderma serricorne',
      'Mezium affine',
      'Niptus hololeucus',
      'Ochina ptinoides',
      'Pseudeurostus hilleri',
      'Ptilinus pectinicornis',
      'Ptinomorphus imperialis',
      'Ptinus clavipes',
      'Ptinus dubius',
      'Ptinus exulans',
      'Ptinus fur',
      'Ptinus latefasciatus',
      'Ptinus lichenum',
      'Ptinus palliatus',
      'Ptinus pilosus',
      'Ptinus pusillus',
      'Ptinus raptor',
      'Ptinus sexpunctatus',
      'Ptinus subpilosus',
      'Ptinus tectus',
      'Ptinus villiger',
      'Sphaericus gibboides',
      'Stegobium paniceum',
      'Stethomezium squamosum',
      'Tipnus unicolor',
      'Trigonogenius globulus',
      'Xestobium rufovillosum',
      'Xyletinus longitarsis',
      'Larcobius erichsonii'
    ]

    expect(actual).to.deep.equal(expected)
  })
})

describe('speciesByFamily()', function () {
  it('returns an object of each species organized by their family name', function () {
    const actual = speciesByFamily(beetles)
    const expected = {
        Dermestidae: [
            {
                species: 'Anthrenocerus australis',
                id: 'dermestidae-1',
                family: 'Dermestidae'
            }, {
                species: 'Anthrenus coloratus',
                id: 'dermestidae-2',
                family: 'Dermestidae'
            }, {
                species: 'Anthrenus flavipes',
                id: 'dermestidae-3',
                family: 'Dermestidae'
            }, {
                species: 'Anthrenus fuscus',
                id: 'dermestidae-4',
                family: 'Dermestidae'
            }, {
                species: 'Anthrenus museorum',
                id: 'dermestidae-5',
                family: 'Dermestidae'
            }, {
                species: 'Anthrenus olgae',
                id: 'dermestidae-6',
                family: 'Dermestidae'
            }, {
                species: 'Anthrenus pimpinellae',
                id: 'dermestidae-7',
                family: 'Dermestidae'
            }, {
                species: 'Anthrenus sarnicus',
                id: 'dermestidae-8',
                family: 'Dermestidae'
            }, {
                species: 'Anthrenus scrophulariae',
                id: 'dermestidae-9',
                family: 'Dermestidae'
            }, {
                species: 'Anthrenus verbasci',
                id: 'dermestidae-10',
                family: 'Dermestidae'
            }, {
                species: 'Attagenus brunneus',
                id: 'dermestidae-11',
                family: 'Dermestidae'
            }, {
                species: 'Attagenus cyphonoides',
                id: 'dermestidae-12',
                family: 'Dermestidae'
            }, {
                species: 'Attagenus fasciatus',
                id: 'dermestidae-13',
                family: 'Dermestidae'
            }, {
                species: 'Attagenus pellio',
                id: 'dermestidae-14',
                family: 'Dermestidae'
            }, {
                species: 'Attagenus smirnovi',
                id: 'dermestidae-15',
                family: 'Dermestidae'
            }, {
                species: 'Attagenus trifasciatus',
                id: 'dermestidae-16',
                family: 'Dermestidae'
            }, {
                species: 'Attagenus unicolor',
                id: 'dermestidae-17',
                family: 'Dermestidae'
            }, {
                species: 'Ctesias serra',
                id: 'dermestidae-18',
                family: 'Dermestidae'
            }, {
                species: 'Dermestes ater',
                id: 'dermestidae-19',
                family: 'Dermestidae'
            }, {
                species: 'Dermestes carnivorus',
                id: 'dermestidae-20',
                family: 'Dermestidae'
            }, {
                species: 'Dermestes frischii',
                id: 'dermestidae-21',
                family: 'Dermestidae'
            }, {
                species: 'Dermestes haemorrhoidalis',
                id: 'dermestidae-22',
                family: 'Dermestidae'
            }, {
                species: 'Dermestes lardarius',
                id: 'dermestidae-23',
                family: 'Dermestidae'
            }, {
                species: 'Dermestes leechi',
                id: 'dermestidae-24',
                family: 'Dermestidae'
            }, {
                species: 'Dermestes maculatus',
                id: 'dermestidae-25',
                family: 'Dermestidae'
            }, {
                species: 'Dermestes murinus',
                id: 'dermestidae-26',
                family: 'Dermestidae'
            }, {
                species: 'Dermestes peruvianus',
                id: 'dermestidae-27',
                family: 'Dermestidae'
            }, {
                species: 'Dermestes undulatus',
                id: 'dermestidae-28',
                family: 'Dermestidae'
            }, {
                species: 'Globicornis nigripes',
                id: 'dermestidae-29',
                family: 'Dermestidae'
            }, {
                species: 'Megatoma undata',
                id: 'dermestidae-30',
                family: 'Dermestidae'
            }, {
                species: 'Orphinus fulvipes',
                id: 'dermestidae-31',
                family: 'Dermestidae'
            }, {
                species: 'Reesa vespulae',
                id: 'dermestidae-32',
                family: 'Dermestidae'
            }, {
                species: 'Thorictodes heydeni',
                id: 'dermestidae-33',
                family: 'Dermestidae'
            }, {
                species: 'Thylodrias contractus',
                id: 'dermestidae-34',
                family: 'Dermestidae'
            }, {
                species: 'Trinodes hirtus',
                id: 'dermestidae-35',
                family: 'Dermestidae'
            }, {
                species: 'Trogoderma angustum',
                id: 'dermestidae-36',
                family: 'Dermestidae'
            }, {
                species: 'Trogoderma glabrum',
                id: 'dermestidae-37',
                family: 'Dermestidae'
            }, {
                species: 'Trogoderma granarium',
                id: 'dermestidae-38',
                family: 'Dermestidae'
            }, {
                species: 'Trogoderma inclusum',
                id: 'dermestidae-39',
                family: 'Dermestidae'
            }, {
                species: 'Trogoderma variabile',
                id: 'dermestidae-40',
                family: 'Dermestidae'
            }
        ],
        Bostrichidae: [
            {
                species: 'Bostrichus capucinus',
                id: 'bostrichidae-1',
                family: 'Bostrichidae'
            }, {
                species: 'Bostrychoplites cornutus',
                id: 'bostrichidae-2',
                family: 'Bostrichidae'
            }, {
                species: 'Lyctus brunneus',
                id: 'bostrichidae-3',
                family: 'Bostrichidae'
            }, {
                species: 'Lyctus cavicollis',
                id: 'bostrichidae-4',
                family: 'Bostrichidae'
            }, {
                species: 'Lyctus linearis',
                id: 'bostrichidae-5',
                family: 'Bostrichidae'
            }, {
                species: 'Lyctus planicollis',
                id: 'bostrichidae-6',
                family: 'Bostrichidae'
            }, {
                species: 'Lyctus sinensis',
                id: 'bostrichidae-7',
                family: 'Bostrichidae'
            }, {
                species: 'Rhyzopertha dominica',
                id: 'bostrichidae-8',
                family: 'Bostrichidae'
            }, {
                species: 'Stephanopachys substriatus',
                id: 'bostrichidae-9',
                family: 'Bostrichidae'
            }, {
                species: 'Trogoxylon parallelopipedum',
                id: 'bostrichidae-10',
                family: 'Bostrichidae'
            }
        ],
        Anobiidae: [
            {
                species: 'Anitys rubens',
                id: 'anobiidae-1',
                family: 'Anobiidae'
            }, {
                species: 'Anobium inexspectatum',
                id: 'anobiidae-2',
                family: 'Anobiidae'
            }, {
                species: 'Anobium punctatum',
                id: 'anobiidae-3',
                family: 'Anobiidae'
            }, {
                species: 'Caenocara affinis',
                id: 'anobiidae-4',
                family: 'Anobiidae'
            }, {
                species: 'Caenocara bovistae',
                id: 'anobiidae-5',
                family: 'Anobiidae'
            }, {
                species: 'Dorcatoma ambjoerni',
                id: 'anobiidae-6',
                family: 'Anobiidae'
            }, {
                species: 'Dorcatoma chrysomelina',
                id: 'anobiidae-7',
                family: 'Anobiidae'
            }, {
                species: 'Dorcatoma dresdensis',
                id: 'anobiidae-8',
                family: 'Anobiidae'
            }, {
                species: 'Dorcatoma flavicornis',
                id: 'anobiidae-9',
                family: 'Anobiidae'
            }, {
                species: 'Dorcatoma serra',
                id: 'anobiidae-10',
                family: 'Anobiidae'
            }, {
                species: 'Dryophilus anobioides',
                id: 'anobiidae-11',
                family: 'Anobiidae'
            }, {
                species: 'Dryophilus pusillus',
                id: 'anobiidae-12',
                family: 'Anobiidae'
            }, {
                species: 'Ernobius abietis',
                id: 'anobiidae-13',
                family: 'Anobiidae'
            }, {
                species: 'Ernobius angusticollis',
                id: 'anobiidae-14',
                family: 'Anobiidae'
            }, {
                species: 'Ernobius gigas',
                id: 'anobiidae-15',
                family: 'Anobiidae'
            }, {
                species: 'Ernobius mollis',
                id: 'anobiidae-16',
                family: 'Anobiidae'
            }, {
                species: 'Ernobius nigrinus',
                id: 'anobiidae-17',
                family: 'Anobiidae'
            }, {
                species: 'Ernobius pini',
                id: 'anobiidae-18',
                family: 'Anobiidae'
            }, {
                species: 'Gastrallus immarginatus',
                id: 'anobiidae-19',
                family: 'Anobiidae'
            }, {
                species: 'Gibbium aequinoctiale',
                id: 'anobiidae-20',
                family: 'Anobiidae'
            }, {
                species: 'Gibbium psylloides',
                id: 'anobiidae-21',
                family: 'Anobiidae'
            }, {
                species: 'Grynobius planus',
                id: 'anobiidae-22',
                family: 'Anobiidae'
            }, {
                species: 'Hadrobregmus denticollis',
                id: 'anobiidae-23',
                family: 'Anobiidae'
            }, {
                species: 'Hemicoelus fulvicornis',
                id: 'anobiidae-24',
                family: 'Anobiidae'
            }, {
                species: 'Hemicoelus nitidus',
                id: 'anobiidae-25',
                family: 'Anobiidae'
            }, {
                species: 'Lasioderma serricorne',
                id: 'anobiidae-26',
                family: 'Anobiidae'
            }, {
                species: 'Mezium affine',
                id: 'anobiidae-27',
                family: 'Anobiidae'
            }, {
                species: 'Niptus hololeucus',
                id: 'anobiidae-28',
                family: 'Anobiidae'
            }, {
                species: 'Ochina ptinoides',
                id: 'anobiidae-29',
                family: 'Anobiidae'
            }, {
                species: 'Pseudeurostus hilleri',
                id: 'anobiidae-30',
                family: 'Anobiidae'
            }, {
                species: 'Ptilinus pectinicornis',
                id: 'anobiidae-31',
                family: 'Anobiidae'
            }, {
                species: 'Ptinomorphus imperialis',
                id: 'anobiidae-32',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus clavipes',
                id: 'anobiidae-33',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus dubius',
                id: 'anobiidae-34',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus exulans',
                id: 'anobiidae-35',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus fur',
                id: 'anobiidae-36',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus latefasciatus',
                id: 'anobiidae-37',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus lichenum',
                id: 'anobiidae-38',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus palliatus',
                id: 'anobiidae-39',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus pilosus',
                id: 'anobiidae-40',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus pusillus',
                id: 'anobiidae-41',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus raptor',
                id: 'anobiidae-42',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus sexpunctatus',
                id: 'anobiidae-43',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus subpilosus',
                id: 'anobiidae-44',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus tectus',
                id: 'anobiidae-45',
                family: 'Anobiidae'
            }, {
                species: 'Ptinus villiger',
                id: 'anobiidae-46',
                family: 'Anobiidae'
            }, {
                species: 'Sphaericus gibboides',
                id: 'anobiidae-47',
                family: 'Anobiidae'
            }, {
                species: 'Stegobium paniceum',
                id: 'anobiidae-48',
                family: 'Anobiidae'
            }, {
                species: 'Stethomezium squamosum',
                id: 'anobiidae-49',
                family: 'Anobiidae'
            }, {
                species: 'Tipnus unicolor',
                id: 'anobiidae-50',
                family: 'Anobiidae'
            }, {
                species: 'Trigonogenius globulus',
                id: 'anobiidae-51',
                family: 'Anobiidae'
            }, {
                species: 'Xestobium rufovillosum',
                id: 'anobiidae-52',
                family: 'Anobiidae'
            }, {
                species: 'Xyletinus longitarsis',
                id: 'anobiidae-53',
                family: 'Anobiidae'
            }
        ],
        Derodontidae: [
            {
                species: 'Larcobius erichsonii',
                id: 'derodontidae-1',
                family: 'Derodontidae'
            }
        ]
    }

    expect(actual).to.deep.equal(expected)
  })
})

describe('getFamilyCount()', function () {
  it('should return a count of all the species in a given family', function () {
    const actual = getFamilyCount(beetles)
    const expected = {
      Anobiidae: 53,
      Bostrichidae: 10,
      Dermestidae: 40,
      Derodontidae: 1
    }

    expect(actual).to.deep.equal(expected)
  })
})

describe('findById()', function () {
  it('returns a specific species based on the id', function () {
    const actual = findById(beetles, 'anobiidae-5')
    const expected = {
      'species': 'Caenocara bovistae',
      'id': 'anobiidae-5',
      'family': 'Anobiidae'
    }

    expect(actual).to.deep.equal(expected)
  })

  it('returns null if no species can be found', function () {

  })
})

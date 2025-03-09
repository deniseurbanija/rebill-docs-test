import React from 'react'

interface SectionLinks {
    name: string,
    link: string
}

interface Section {
  country: string,
  sections: SectionLinks[]
}

type SectionData = Section[]

const IndexMenu = ({ sectionsData }: { sectionsData: SectionData }) => {
    return (
      <div className="flex flex-col flex-wrap justify-between md:flex-row mt-12">
        {sectionsData.map((countryData, index) => (
          <div
            key={index}
            className="flex-basis-[calc(20%-1rem)] mb-4"
          >
            <h4 className="mb-4 text-lg font-semibold">{countryData.country}</h4>
            <ul className="m-0 list-none p-0">
              {countryData.sections.map((section, secIndex) => (
                <li key={secIndex} className="mb-2 p-0 text-gray-400">
                  <a
                    href={section.link}
                    className="p-0 text-gray-400 text-sm no-underline transition-colors duration-300 ease-in-out hover:text-gray-600"
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
}

export default IndexMenu

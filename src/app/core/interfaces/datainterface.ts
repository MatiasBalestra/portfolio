export interface datainterface {
    idPersona:    number;
    name:         string;
    surname:      string;
    email:        string;
    profession:   string;
    localization: string;
    twitter:      string;
    instagram:    string;
    linkedin:     string;
    github:       string;
    telefono:     string;
    fecha_nac:    string;
    url_photo:    string;
    url_banner:   string;
    about_me:     string;
    experiences:  Experience[];
    projects:     Project[];
    education:    Education[];
    skills:       Skill[];
}

export interface Education {
    id:                   number;
    titulo:               string;
    institutoName:        string;
    descriptionEducation: string;
    linkCertificado:      string;
    fecha_ini:            string;
    fecha_fin:            string;
}

export interface Experience {
    id:              number;
    jobPosition:     string;
    jobCompany:      string;
    jobDescription:  string;
    jobType:         string;
    jobLocalization: string;
    fecha_ini:       string;
    fecha_fin:       string;
    url_imgJob:      string;
}

export interface Project {
    id:                 number;
    projectName:        string;
    projectDescription: string;
    projectUrlImg:      string;
    linkRepositorio:    string;
    linkWeb:            string;
}

export interface Skill {
    idSkills:   number;
    nameSkill:  string;
    levelSkill: number;
    logoSkill:  string;
}
export interface ZippiaJobsResponse {
    jobs:      Job[];
    totalJobs: number;
}

export interface Job {
    jobId:                             string;
    source:                            Source;
    jobTitle:                          string;
    location:                          string;
    estimatedSalary:                   string;
    unifiedZippiaSalary:               number;
    companyName:                       ObJcompanyDisplay;
    companyInitial:                    CompanyInitial;
    companyID:                         number;
    companyLogo:                       string;
    jobDescription:                    string;
    showNewJobBedge:                   boolean;
    jobURL:                            string;
    url:                               string;
    partnerName:                       PartnerName;
    iconSVG:                           string;
    iconClass:                         IconClass;
    templateName:                      TemplateName;
    titleID:                           string;
    socode:                            Socode;
    socCodeName:                       boolean;
    listingHash:                       string;
    postedDate:                        PostedDate;
    postingDate:                       Date;
    actionDateSince:                   ActionDateSince;
    benefits:                          any[];
    jobTags:                           JobTag[];
    jobLevels:                         JobLevel[];
    cpc:                               number;
    sponsorFlag:                       boolean;
    contactEmailsFlag:                 boolean;
    sponsoredDlp:                      boolean;
    easyApplyFlag:                     boolean;
    contactEmails:                     any[];
    bestCompaniesPageURLAtJobLocation: string;
    careerMainPageURL:                 string;
    skillsets:                         string[];
    OBJcountry:                        OBJcountry;
    OBJcity:                           string;
    OBJstateCode:                      OBJstateCode;
    OBJstate:                          OBJstate;
    OBJcompanyID:                      number;
    OBJcompanyDisplay:                 ObJcompanyDisplay;
    OBJindustry:                       OBJindustry;
    OBJpostingDate:                    Date;
    OBJtitle:                          string;
    OBJtitleDisplay:                   string;
    OBJurl:                            string;
    OBJzipcode:                        string;
    OBJjobTags:                        JobTag[];
    OBJdesc?:                          string;
    jobMajor:                          boolean;
    requiredDegree:                    null;
    preferredDegrees:                  any[];
    formattedOriginalCompanyName:      ObJcompanyDisplay;
    originalCPC:                       string;
    companyZippiaOverallScore:         number;
    isSpammyCompany:                   boolean;
    nearbyTo0:                         any[];
    snippets:                          string[];
}

export enum ObJcompanyDisplay {
    FidelityInvestments = 'Fidelity Investments',
}

export enum OBJcountry {
    Us = 'US',
}

export enum OBJindustry {
    BusinessAndFinancial = 'Business and Financial',
    LifePhysicalAndSocialScience = 'Life, Physical, and Social Science',
}

export enum JobTag {
    DealWithPeople = 'DEAL WITH PEOPLE',
    MightSponsor = 'might_sponsor',
    MostlySitting = 'MOSTLY SITTING',
    None = 'None',
}

export enum OBJstate {
    Arizona = 'Arizona',
}

export enum OBJstateCode {
    Az = 'AZ',
}

export enum ActionDateSince {
    AFewSecondsAgo = 'a few seconds ago',
}

export enum CompanyInitial {
    F = 'F',
}

export enum IconClass {
    IconBusiness = 'icon-business',
    IconLifePhysical = 'icon-life-physical',
}

export enum JobLevel {
    EntryLevel = 'Entry Level',
    JuniorLevel = 'Junior Level',
    MidLevel = 'Mid Level',
}

export enum PartnerName {
    DSPPrngCo = 'dsp.prng.co',
}

export enum PostedDate {
    The11DAgo = '11d ago',
}

export enum Socode {
    The13111100 = '13-1111.00',
    The13119900 = '13-1199.00',
    The13205200 = '13-2052.00',
    The19305100 = '19-3051.00',
}

export enum Source {
    RD = 'RD',
}

export enum TemplateName {
    SVGIconsIndustryTemplatesIconBusinessHTML = 'svgIcons/industryTemplates/icon-business.html',
    SVGIconsIndustryTemplatesIconLifePhysicalHTML = 'svgIcons/industryTemplates/icon-life-physical.html',
}

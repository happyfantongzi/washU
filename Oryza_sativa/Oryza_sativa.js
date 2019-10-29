import Chromosome from '../Chromosome';
import Genome from '../Genome';
import TrackModel from '../../TrackModel';
import cytobands from './cytoBand.json';
import annotationTracks from "./annotationTracks.json";

const genome = new Genome("Oryza_sativa", [
    new Chromosome("chr1", 43270923),
    new Chromosome("chr2", 35937250),
    new Chromosome("chr3", 36413819),
    new Chromosome("chr4", 35502694),
    new Chromosome("chr5", 29958434),
    new Chromosome("chr6", 31248787),
    new Chromosome("chr7", 29697621),
    new Chromosome("chr8", 28443022),
    new Chromosome("chr9", 23012720),
    new Chromosome("chr10", 23207287),
    new Chromosome("chr11", 29021106),
    new Chromosome("chr12", 27531856),
]);

const navContext = genome.makeNavContext();
const defaultRegion = navContext.parse("chr6:15425276-16425961");
const defaultTracks = [
    new TrackModel({
        type: "geneAnnotation",
        name: "refGene",
        genome: "Oryza_sativa",
    }),
    // new TrackModel({
    //     type: "geneAnnotation",
    //     name: "gencodeM19",
    //     genome: "mm10",
    // }),
    new TrackModel({
        type: "geneAnnotation",
        name: "gencodeM19Basic",
        genome: "Oryza_sativa",
    }),
    new TrackModel({
        type: "ruler",
        name: "Ruler",
    }),
    // new TrackModel({
    //     type: "longrange",
    //     name: "ES-E14 ChIA-PET",
    //     url: "https://egg.wustl.edu/d/mm9/GSE28247_st3c.gz",
    // }),
    // new TrackModel({
    //     type: "biginteract",
    //     name: "test bigInteract",
    //     url: "https://epgg-test.wustl.edu/dli/long-range-test/interactExample3.inter.bb",
    // }),
   // new TrackModel({
   //     type: 'repeatmasker',
   //     name: 'RepeatMasker',
   //     url: 'https://vizhub.wustl.edu/public/mm10/rmsk16.bb',
   // }),
    // new TrackModel({
    //     type: 'refbed',
    //     name: 'refGene in refbed',
    //     url: 'https://wangftp.wustl.edu/~rsears/FOR_DAOFENG/gencodeM18_load_basic_Gene.bed.gz',
    // }),
    // new TrackModel({
    //     type: 'cool',
    //     name: 'Cool Track',
    //     url: 'CQMd6V_cRw6iCI_-Unl3PQ'
    // }),
];

const publicHubData = {
    "4D Nucleome Network": "The 4D Nucleome Network aims to understand the principles underlying nuclear " + 
    "organization in space and time, the role nuclear organization plays in gene expression and cellular function, " +
    "and how changes in nuclear organization affect normal development as well as various diseases.  The program is " +
    "developing novel tools to explore the dynamic nuclear architecture and its role in gene expression programs, " + 
    "models to examine the relationship between nuclear organization and function, and reference maps of nuclear" + 
    "architecture in a variety of cells and tissues as a community resource.",
    "Encyclopedia of DNA Elements (ENCODE)": "The Encyclopedia of DNA Elements (ENCODE) Consortium is an " +
        "international collaboration of research groups funded by the National Human Genome Research Institute " +
        "(NHGRI). The goal of ENCODE is to build a comprehensive parts list of functional elements in the human " +
        "genome, including elements that act at the protein and RNA levels, and regulatory elements that control " +
        "cells and circumstances in which a gene is active.",
};

const publicHubList = [
    {
        collection: "Encyclopedia of DNA Elements (ENCODE)",
        name: "Mouse ENCODE",
        numTracks: 1616,
        oldHubFormat: false,
        url: "https://vizhub.wustl.edu/public/mm10/new/mm10encode2015",
        description: 'The Mouse ENCODE Consortium consisted of a number of Data Production Centers and made use of the human ENCODE Data Coordination Center (DCC) at the University of California, Santa Cruz (currently at Stanford University). Production Centers generally focused on different data types, including transcription     factor and polymerase occupancy, DNaseI hypersensitivity, histone modification, and RNA transcription.'
    },
    {
        collection: "4D Nucleome Network",
        name: "4DN HiC datasets",
        numTracks: 23,
        oldHubFormat: false,
        url: "https://vizhub.wustl.edu/public/mm10/4dn_mm10.json",
        description: {
            'hub built by': 'Daofeng Li (dli23@wustl.edu)',
            'hub built date': 'Sep 1 2018',
            'hub built notes': 'metadata information are obtained directly from 4DN data portal'
        },
    },
    {
        collection: "Encyclopedia of DNA Elements (ENCODE)",
        name: "Mouse ENCODE from ENCODE data portal",
        numTracks: 13001,
        oldHubFormat: false,
        url: "https://vizhub.wustl.edu/public/mm10/new/mm10_encode_mouse_bigwig_metadata_nov142018.json",
        description: {
            'hub built by': 'Daofeng Li (dli23@wustl.edu)',
            'hub built date': 'Nov 14 2018',
            'hub built notes': 'metadata information are obtained directly from ENCODE data portal, track files are hosted by ENCODE data portal as well'
        },
    },
    {
        collection: "International Human Epigenome Consortium (IHEC) ",
        name: "International Human Epigenome Consortium (IHEC) epigenomic datasets",
        numTracks: 266,
        oldHubFormat: false,
        url: "https://vizhub.wustl.edu/public/mm10/new/ihec-mm10-urls.json",
        description: {
            'hub built by': 'Daofeng Li (dli23@wustl.edu)',
            'hub built date': 'Nov 30 2018',
            'hub built notes': 'track files are hosted by IHEC data portal'
        },
    },
    {
        collection: "HiC interaction from HiGlass",
        name: "HiC interaction from HiGlass",
        numTracks: 5,
        oldHubFormat: false,
        url: "https://vizhub.wustl.edu/public/mm10/new/mm10_cool.json"
    },
]

const Oryza_sativa = {
    genome: genome,
    navContext: navContext,
    cytobands: cytobands,
    defaultRegion: defaultRegion,
    defaultTracks: defaultTracks,
    twoBitURL: "https://github.com/happyfantongzi/washU/blob/master/Oryza_sativa.IRGSP-1.0.dna.toplevel.2bit",
    annotationTracks,
};

export default Oryza_sativa;

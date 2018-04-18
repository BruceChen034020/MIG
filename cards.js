function CardList_init(){
  c = [];
  c[0] = new Card("Leprosy / Hansen disease (HD)", 1, "Disease", 0);
c[1] = new Card("Streptococcal TSS (STSS)", 2, "Disease", 1);
c[2] = new Card("Neonatal conjunctivitis / Ophthalmia of the newborn", 3, "Disease", 2);
c[3] = new Card("Trachoma", 4, "Disease", 3);
c[4] = new Card("Oral cavity", 1, "Organ", 4);
c[5] = new Card("Streptococcus mutans", 2, "Pathogen", 5);
c[6] = new Card("Dental caries / Dental cavity / Tooth decay", 3, "Disease", 6);
c[7] = new Card("(Naive) B Cell / CD19+ lymphocyte", 4, "Immunity", 7);
c[8] = new Card("Stomach", 1, "Organ", 8);
c[9] = new Card("Gingivitis", 2, "Disease", 9);
c[10] = new Card("Helper T cell / Th cell (Cytokine)", 3, "Immunity", 10);
c[11] = new Card("Small intestine", 4, "Organ", 11);
c[12] = new Card("Bacteroides (genus)", 1, "Pathogen", 12);
c[13] = new Card("Periodontitis / PD", 2, "Disease", 13);
c[14] = new Card("Killer T cell / Cytotoxic T lymphocyte / Tc / CTL / Cytolytic T cell / CD8+ T-cell", 3, "Immunity", 14);
c[15] = new Card("Large intestine", 4, "Organ", 15);
c[16] = new Card("Staphylococcal food poisoning", 1, "Disease", 16);
c[17] = new Card("IgA", 2, "Immunity", 17);
c[18] = new Card("Clostridial food poisoning", 3, "Disease", 18);
c[19] = new Card("IgG", 4, "Immunity", 19);
c[20] = new Card("Bacillus cereus food poisoning", 1, "Disease", 20);
c[21] = new Card("Salivary mucins", 2, "Immunity", 21);
c[22] = new Card("Botulism / Flaccid paralysis", 3, "Disease", 22);
c[23] = new Card("Lysozyme", 4, "Immunity", 23);
c[24] = new Card("Actinobacillus (genus)", 1, "Pathogen", 24);
c[25] = new Card("Cholera", 2, "Disease", 25);
c[26] = new Card("Lactoferrin", 3, "Immunity", 26);
c[27] = new Card("Treponema (genus)", 4, "Pathogen", 27);
c[28] = new Card("Enterotoxigenic E. coli / ETEC / Traveler's diarrhea", 1, "Disease", 28);
c[29] = new Card("Staphylococcus aureus (enterotoxin)", 2, "Pathogen", 29);
c[30] = new Card("Defensins", 3, "Immunity", 30);
c[31] = new Card("Clostridium perfringens (toxin)", 4, "Pathogen", 31);
c[32] = new Card("Antibody", 1, "Immunity", 32);
c[33] = new Card("Bacillus cereus (enterotoxin)", 2, "Pathogen", 33);
c[34] = new Card("Stomach acid", 3, "Immunity", 34);
c[35] = new Card("Clostridium botulinum (neurotoxin / Botox)", 4, "Pathogen", 35);
c[36] = new Card("Mucus on intestinal surfaces", 1, "Immunity", 36);
c[37] = new Card("Vibrio cholerae", 2, "Pathogen", 37);
c[38] = new Card("Enteropathogenic E. coli / EPEC ", 3, "Disease", 38);
c[39] = new Card("Peristalsis", 4, "Immunity", 39);
c[40] = new Card("Escherichia coli pathogenic serotype", 1, "Pathogen", 40);
c[41] = new Card("Bile", 2, "Immunity", 41);
c[42] = new Card("Clostridium difficile", 3, "Pathogen", 42);
c[43] = new Card("Pseudomembranous colitis", 4, "Disease", 43);
c[44] = new Card("Monocyte / Macrophage / Histiocyte / Microglia / Kupffer cell / Alveolar macrophage / Osteoclasts / Adipose tissue macrophages / Sinus histiocytes / Langerhans cells / Hofbauer cells / Intraglomerular mesangial cells / Red pulp macrophages / Sinusoidal lining cells / LysoMac", 1, "Immunity", 44);
c[45] = new Card("Listeria monocytogenes", 2, "Pathogen", 45);
c[46] = new Card("Listeriosis", 3, "Disease", 46);
c[47] = new Card("Neutrophil", 4, "Immunity", 47);
c[48] = new Card("Vibrio parahaemolyticus", 1, "Pathogen", 48);
c[49] = new Card("Inflammatory gastroenteritis", 2, "Disease", 49);
c[50] = new Card("Basophil", 3, "Immunity", 50);
c[51] = new Card("Vibrio vulnificus", 4, "Pathogen", 51);
c[52] = new Card("Vibriosis", 1, "Disease", 52);
c[53] = new Card("Eosinophil", 2, "Immunity", 53);
c[54] = new Card("Bacillus anthracis", 3, "Pathogen", 54);
c[55] = new Card("Proteolytic enzyme", 4, "Immunity", 55);
c[56] = new Card("Salmonella enterica Typhi (serotype)", 1, "Pathogen", 56);
c[57] = new Card("Typhoid fever", 2, "Disease", 57);
c[58] = new Card("Mast cell", 3, "Immunity", 58);
c[59] = new Card("Salmonella enterica Typhimurium (serotype)", 4, "Pathogen", 59);
c[60] = new Card("Salmonellosis", 1, "Disease", 60);
c[61] = new Card("Natural killer cell / NK cell / Large granular lymphocyte", 2, "Immunity", 61);
c[62] = new Card("Shigella sonnei", 3, "Pathogen", 62);
c[63] = new Card("Shigellosis", 4, "Disease", 63);
c[64] = new Card("Exfoliation of epithelial cells", 1, "Immunity", 64);
c[65] = new Card("Escherichia coli O157:H7 (serotype)", 2, "Pathogen", 65);
c[66] = new Card("Enterohemorrhagic E. coli / Hemorrhagic colitis", 3, "Disease", 66);
c[67] = new Card("Campylobacter jejuni", 4, "Pathogen", 67);
c[68] = new Card("Campylobacteriosis", 1, "Disease", 68);
c[69] = new Card("Yersinia enterocolitica", 2, "Pathogen", 69);
c[70] = new Card("Yersiniosis", 3, "Disease", 70);
c[71] = new Card("Helicobacter pylori", 4, "Pathogen", 71);
c[72] = new Card("Gastric ulcer disease", 1, "Disease", 72);
c[73] = new Card("Shigella dysenteriae", 2, "Pathogen", 73);
c[74] = new Card("Salmonella (genus)", 3, "Pathogen", 74);
c[75] = new Card("Ear", 4, "Organ", 75);
c[76] = new Card("Haemophilus influenzae type b / Hib (serotype)", 1, "Pathogen", 76);
c[77] = new Card("Otitis externa / Acute otitis externa / Swimmer's ear", 2, "Disease", 77);
c[78] = new Card("Nose (Paranasal sinuses)", 3, "Organ", 78);
c[79] = new Card("Neisseria meningitidis W-135 (serotype)", 4, "Pathogen", 79);
c[80] = new Card("Acute bacterial meningitis / ABM", 1, "Disease", 80);
c[81] = new Card("Throat", 2, "Organ", 81);
c[82] = new Card("Streptococcus pyogenes", 3, "Pathogen", 82);
c[83] = new Card("Acute otitis media / AOM", 4, "Disease", 83);
c[84] = new Card("Brain (meninges)", 1, "Organ", 84);
c[85] = new Card("Corynebacterium diphtheriae", 2, "Pathogen", 85);
c[86] = new Card("Tuberculosis (TB)", 3, "Disease", 86);
c[87] = new Card("Mucociliary clearance", 4, "Immunity", 87);
c[88] = new Card("Lung (Lower respiratory tract)", 1, "Organ", 88);
c[89] = new Card("Indegenous microbiota of the URT (opportunistic)", 2, "Pathogen", 89);
c[90] = new Card("Streptococcal pharyngitis", 3, "Disease", 90);
c[91] = new Card("Streptococcus (genus)", 4, "Pathogen", 91);
c[92] = new Card("Scarlet fever", 1, "Disease", 92);
c[93] = new Card("Staphylococcus (genus)", 2, "Pathogen", 93);
c[94] = new Card("Diphtheria", 3, "Disease", 94);
c[95] = new Card("Staphylococcus aureus", 4, "Pathogen", 95);
c[96] = new Card("Epiglottitis", 1, "Disease", 96);
c[97] = new Card("Pseudomonas (genus)", 2, "Pathogen", 97);
c[98] = new Card("Meningococcal meningitis / Meningococcemia", 3, "Disease", 98);
c[99] = new Card("Streptococcus pneumoniae", 4, "Pathogen", 99);
c[100] = new Card("Pneumococcal meningitis", 1, "Disease", 100);
c[101] = new Card("Neiserria meningitidis", 2, "Pathogen", 101);
c[102] = new Card("Haemophilus meningitis", 3, "Disease", 102);
c[103] = new Card("Bordetella pertussis", 4, "Pathogen", 103);
c[104] = new Card("Pertussis / whooping cough / 100-day cough", 1, "Disease", 104);
c[105] = new Card("Mycobacterium tuberculosis", 2, "Pathogen", 105);
c[106] = new Card("Infectious bronchitis", 3, "Disease", 106);
c[107] = new Card("Mycoplasma pneumoniae", 4, "Pathogen", 107);
c[108] = new Card("Healthcare-acquired pneumonia (HCAP)", 1, "Disease", 108);
c[109] = new Card("Chlamydophila pneumoniae", 2, "Pathogen", 109);
c[110] = new Card("Community-acquired pneumonia (CAP)", 3, "Disease", 110);
c[111] = new Card("Klebsiella pneumoniae", 4, "Pathogen", 111);
c[112] = new Card("Staphylococcal pneumonia", 1, "Disease", 112);
c[113] = new Card("Pseudomonas aeruginosa", 2, "Pathogen", 113);
c[114] = new Card("Pseudomonas pneumonia", 3, "Disease", 114);
c[115] = new Card("Legionella pneumophila", 4, "Pathogen", 115);
c[116] = new Card("Pneumococcal pneumonia", 1, "Disease", 116);
c[117] = new Card("Coxiella burnetii", 2, "Pathogen", 117);
c[118] = new Card("Klebsiella pneumonia", 3, "Disease", 118);
c[119] = new Card("Chlamydophia psittaci", 4, "Pathogen", 119);
c[120] = new Card("\"Atypical\" CAP / Walking pneumonia ", 1, "Disease", 120);
c[121] = new Card("Legionnaires' disease / Legionellosis", 2, "Disease", 121);
c[122] = new Card("Q fever", 3, "Disease", 122);
c[123] = new Card("Psittacosis", 4, "Disease", 123);
c[124] = new Card("Chlamyidal pneumonia", 1, "Disease", 124);
c[125] = new Card("Tonsillitis", 2, "Disease", 125);
c[126] = new Card("Skin", 3, "Organ", 126);
c[127] = new Card("Clostridium tetani", 4, "Pathogen", 127);
c[128] = new Card("Anthrax", 1, "Disease", 128);
c[129] = new Card("Epithelial cells joined by tight junctions", 2, "Immunity", 129);
c[130] = new Card("Muscle", 3, "Organ", 130);
c[131] = new Card("Leptospira interrogans", 4, "Pathogen", 131);
c[132] = new Card("Tetanus", 1, "Disease", 132);
c[133] = new Card("Antimicrobial enzymes", 2, "Immunity", 133);
c[134] = new Card("Blood", 3, "Organ", 134);
c[135] = new Card("Gas gangrene", 4, "Disease", 135);
c[136] = new Card("Pulmonary surfactant (Surfactant proteins SP-A)", 1, "Immunity", 136);
c[137] = new Card("Leptospirosis (Weil syndrome)", 2, "Disease", 137);
c[138] = new Card("Tears", 3, "Immunity", 138);
c[139] = new Card("Yersinia pestis", 4, "Pathogen", 139);
c[140] = new Card("Plague", 1, "Disease", 140);
c[141] = new Card("Nasal cilia", 2, "Immunity", 141);
c[142] = new Card("Francisella tularensis", 3, "Pathogen", 142);
c[143] = new Card("Tularemia", 4, "Disease", 143);
c[144] = new Card("Type I interferon", 1, "Immunity", 144);
c[145] = new Card("Borrelia burgdorferi", 2, "Pathogen", 145);
c[146] = new Card("Lyme disease", 3, "Disease", 146);
c[147] = new Card("Borrelia hermsii", 4, "Pathogen", 147);
c[148] = new Card("Tickborne (endemic) relapsing fever", 1, "Disease", 148);
c[149] = new Card("Rickettsia rickettsii", 2, "Pathogen", 149);
c[150] = new Card("Rockey Mountain spotted fever", 3, "Disease", 150);
c[151] = new Card("Rickettsia powezekii", 4, "Pathogen", 151);
c[152] = new Card("Epidemic typhus", 1, "Disease", 152);
c[153] = new Card("Rickettsia typhi", 2, "Pathogen", 153);
c[154] = new Card("Murine typhus", 3, "Disease", 154);
c[155] = new Card("Orientia tsutsugamushi", 4, "Pathogen", 155);
c[156] = new Card("Scrub typhus", 1, "Disease", 156);
c[157] = new Card("Rickettsia akari", 2, "Pathogen", 157);
c[158] = new Card("Rickettsialpox", 3, "Disease", 158);
c[159] = new Card("Vagina", 4, "Organ", 159);
c[160] = new Card("Lectobacillus species in the vagina", 1, "Immunity", 160);
c[161] = new Card("Reproductive system", 2, "Organ", 161);
c[162] = new Card("Chlamydial urethritis / Chlamydia (Salpingitis / Pelvic inflammatory disease / PID)", 3, "Disease", 162);
c[163] = new Card("Nornal urine flow", 4, "Immunity", 163);
c[164] = new Card("Urethra", 1, "Organ", 164);
c[165] = new Card("Chlamydia trachomatis", 2, "Pathogen", 165);
c[166] = new Card("Gonorrhea", 3, "Disease", 166);
c[167] = new Card("Urinary bladder", 4, "Organ", 167);
c[168] = new Card("Neisseria gonorrhoeae", 1, "Pathogen", 168);
c[169] = new Card("Syphilis", 2, "Disease", 169);
c[170] = new Card("Prostate", 3, "Organ", 170);
c[171] = new Card("Treponema pallidum", 4, "Pathogen", 171);
c[172] = new Card("Chancroid", 1, "Disease", 172);
c[173] = new Card("Kidney", 2, "Organ", 173);
c[174] = new Card("Haemophilus ducreyi", 3, "Pathogen", 174);
c[175] = new Card("Lymphogranuloma venereum / LGV", 4, "Disease", 175);
c[176] = new Card("Eye", 1, "Organ", 176);
c[177] = new Card("Urethritis", 2, "Disease", 177);
c[178] = new Card("Proprionibacterium acnes", 3, "Pathogen", 178);
c[179] = new Card("Cystitis", 4, "Disease", 179);
c[180] = new Card("Mycobacterium leprae", 1, "Pathogen", 180);
c[181] = new Card("Prostatitis", 2, "Disease", 181);
c[182] = new Card("Pyelonephritis", 3, "Disease", 182);
c[183] = new Card("Acne", 4, "Disease", 183);
c[184] = new Card("Burn infections", 1, "Disease", 184);
c[185] = new Card("Furuncles (boils)", 2, "Disease", 185);
c[186] = new Card("Carbuncles", 3, "Disease", 186);
c[187] = new Card("Impetigo", 4, "Disease", 187);
c[188] = new Card("Scalded skin syndrome", 1, "Disease", 188);
c[189] = new Card("Toxic shock syndrome (TSS)", 2, "Disease", 189);
c[190] = new Card("Erysipelas", 3, "Disease", 190);
c[191] = new Card("Necrotizing fasciitis (NF) / Flesh-eating disease", 4, "Disease", 191);



return c;

}

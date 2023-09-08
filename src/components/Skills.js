import React, { Component } from "react";

class Skills extends Component {
  render() {
    /* 
     La méthode render() est appelée chaque fois que le composant doit être rendu.
     Elle retourne l'élément React que le composant doit afficher.

     Dans cette section, le code vérifie si les propriétés (props) "sharedSkills" et "resumeBasicInfo" ont été passées au composant.
     Si elles sont disponibles, elles sont utilisées pour extraire des données.
    */
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      // On extrait le nom de la section des compétences du profil de base.
      var sectionName = this.props.resumeBasicInfo.section_name.skills;

       // On crée une liste de compétences à partir des données dans "sharedSkills".
      // Les compétences sont représentées sous forme d'icônes avec un nom associé.
      var skills_programming = this.props.sharedSkills.programming.icons.map(function (skills, i) {
        return (
          
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var skills_algorithms = this.props.sharedSkills.algorithms.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var skills_ai = this.props.sharedSkills.ai.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
            });
      var skills_project_management = this.props.sharedSkills.project_management.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
            });
      var skills_database = this.props.sharedSkills.database.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var skills_various = this.props.sharedSkills.various.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }
    // Le code ci-dessus génère une liste d'éléments <li> qui représentent les compétences.

    // Enfin, la méthode render() retourne la structure HTML du composant.
    return (
      <section id="skills">
        <div className="col-md-12">

          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>

          <div className="col-md-12 text-center">
            <div className="col-md-12">
              <h1 className="section-title">
                <span className="text-white">Programming.</span>
              </h1>
            </div>
            <ul className="list-inline mx-auto skill-icon">{skills_programming}</ul>
          </div>

          <div className="col-md-12 text-center">
            <div className="col-md-12">
              <h1 className="section-title">
                <span className="text-white">Algorithms</span>
              </h1>
            </div>
            <ul className="list-inline mx-auto skill-icon">{skills_algorithms}</ul>
          </div>
            
          <div className="col-md-12 text-center">
            <div className="col-md-12">
              <h1 className="section-title">
                <span className="text-white">AI</span>
              </h1>
            </div>
            <ul className="list-inline mx-auto skill-icon">{skills_ai}</ul>
            </div>
            
          <div className="col-md-12 text-center">
            <div className="col-md-12">
              <h1 className="section-title">
                <span className="text-white">Project management</span>
              </h1>
            </div>
            <ul className="list-inline mx-auto skill-icon">{skills_project_management}</ul>
            </div>
            
          <div className="col-md-12 text-center">
            <div className="col-md-12">
              <h1 className="section-title">
                <span className="text-white">Database</span>
              </h1>
            </div>
            <ul className="list-inline mx-auto skill-icon">{skills_database}</ul>
            </div>
            
          <div className="col-md-12 text-center">
            <div className="col-md-12">
              <h1 className="section-title">
                <span className="text-white">Various</span>
              </h1>
            </div>
            <ul className="list-inline mx-auto skill-icon">{skills_various}</ul>
            </div>
            
        </div>
      </section>
    );
  }
}

export default Skills;

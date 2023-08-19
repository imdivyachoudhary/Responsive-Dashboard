import AddAssessment from "../components/MainBody/AddAssessment";
import AssessmentCard from "../components/MainBody/AssessmentCard";
import Overview from "../components/MainBody/OverView";
import Section from "../components/MainBody/Section";

function Assessment() {
  const toggleOverview = () => {
    let element = document.getElementById("assessments_overview");
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  };

  return (
    <>
    {/* Each Section can be a different component when we hav many pages and sections */}
      <Section heading="Assessments Overview" id="assessments_overview">
        <div style={{ marginTop: "20px" }}>
          <Overview />
        </div>
      </Section>
      <Section heading="My Assessment" onClickHandle={toggleOverview}>
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
          <AddAssessment />
          <AssessmentCard
            topic="Math Assessment"
            type="Job"
            date="20 Aug 2023"
            duration="00"
            questions="00"
          />
          <AssessmentCard
            topic="Math Assessment"
            type="Job"
            date="20 Aug 2023"
            duration="00"
            questions="00"
          />
          <AssessmentCard
            topic="Math Assessment"
            type="Job"
            date="20 Aug 2023"
            duration="00"
            questions="00"
          />
          <AssessmentCard
            topic="Math Assessment"
            type="Job"
            date="20 Aug 2023"
            duration="00"
            questions="00"
          />
          <AssessmentCard
            topic="Math Assessment"
            type="Job"
            date="20 Aug 2023"
            duration="00"
            questions="00"
          />
        </div>
      </Section>
    </>
  );
}

export default Assessment;

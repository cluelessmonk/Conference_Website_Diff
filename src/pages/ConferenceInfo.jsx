function ConferenceInfo() {
  return (
    <div className="h-full overflow-x-auto p-2 ">
      <div className="flex items-center justify-center mt-2">
        <button className="InformationforParticipants-button flex items-center justify-center  py-4 px-8 rounded-lg bg-blue-600 text-white text-2xl font-bold block">
          Information for Participants
        </button>
      </div>

      <button className="Topic-button mx-auto my-4 py-2 px-4 rounded-lg bg-white text-blue-600 text-lg font-semibold block">
        Participants must adhere to the following for the submission of
        extracts:
      </button>

      <ul className="mx-auto my-4 list-disc list-inside">
        <li>
          All the participants engaged in original work/projects related to
          various broad areas of the conference are welcome to submit the
          abstract.
        </li>
        <li>
          The abstract can be submitted online through the conference website
          only.
        </li>
        <li>
          The abstract submitted should be under the word limit of 250 words.
        </li>
        <li>
          Participants submitting an abstract must register themselves for the
          conference.
        </li>
        <li>
          Participants who are only participating in the conference may also
          register.
        </li>
        <li>
          The organizing committee reserves the right for accepting or rejecting
          the abstracts.
        </li>
        <li>
          The abstract will only be included in the further proceedings if the
          registration fees have been paid successfully.
        </li>
        <li>
          For further information, the participant can view and download the
          Conference Brochure by clicking{" "}
          <a
            href="https://drive.google.com/file/d/1BpLfqBaYIBrwDmWlExkiA2BXIYld65cr/view?usp=sharing"
            target="_blank"
            className="text-blue-600"
          >
            here
          </a>
        </li>
      </ul>

      <button className="SecondTopic-button mx-auto my-4 py-2 px-4 rounded-lg bg-white text-blue-600 text-lg font-semibold block">
        Awards and Honors:
      </button>

      <ul className="mx-auto my-4 list-disc list-inside">
        <li>
          To promote budding young scientists, participants are encouraged to
          apply for various awards like the Young Scientist Award, Best
          Poster/Oral Presentation Award.
        </li>
      </ul>
    </div>
  );
}

export default ConferenceInfo;

// /*
//     Define the keys and value for a JavaScript object that
//     represents a journal entry about what you learned today
// */
const journalEntry = [{
    date: "10/18/19",
    concepts: "lab",
    entry: "Feeling a little better today. Look forward to stepping away from code for the weekend and beginning groupProjects2 on Monday",
    mood:"meh"
},
{
    date: "10/25/19",
    concepts: "Group Project",
    entry: "Felt pretty crappy after group 2, but learned a lot of what not to do.",
    mood:"shit"
},
{
    date: "10/28/19",
    concepts: "Array-Methods",
    entry: "Feeling better today. I think I am beginning to understand a bit more and I'm hoping that book 3 will be a bit less stressful. 'When you get tired learn to rest. Don't Quit...'",
    mood:"positive"
}]



const journalEntrieZ = [
    
];
journalEntrieZ.push(journalEntry);
console.log(journalEntrieZ)



const makeJournalEntryComponent = (date, concepts, entry, mood) => {
    return `
    <div class="journalEntry">
    <h1>${date}</h1>
    <section>${concepts}</section>
    <aside>${entry}</aside>
    <h3>${mood}</h3>
</div>
    `
}

const renderJournalEntries = (journalEntrieZ) => {

}

// Invoke the render function
renderJournalEntries(journalEntrieZ)




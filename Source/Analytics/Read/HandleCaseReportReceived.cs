using Dolittle.Events.Processing;
using Dolittle.Artifacts;
using Dolittle.Events;
using Events.CaseReports;

namespace Read
{
    public class HandleCaseReportReceived : ICanProcessEvents
    {
        private readonly ReadModelRepositoryFor<AlertsByWeek> _repository;
        
        public HandleCaseReportReceived(ReadModelRepositoryFor<AlertsByWeek> repository){
            _repository = repository;
        }

        [EventProcessor("e9b6fc5c-29d5-4d58-97ef-6704577d9692")]
        public void Process(CaseReportReceived @event)
        {
           // var readModel = new AlertsByWeek();
            
        }
        
    }
}

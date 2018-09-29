using Dolittle.ReadModels;

namespace Read.CaseReports
{
    public class NumberOfPatients : ConceptAs<int> {
        
        public static implicit operator NumberOfPatients(int value){
            return new NumberOfPatients{
                Value = value
            };
        }
    }

    public class Year : ConceptAs<int> {
        
        public static implicit operator YearString(int value){
            return new Year{
                Value = value
            };
        }
    }

    public class Week : ConceptAs<int> {
        
        public static implicit operator NumberOfPatients(int value){
            return new Week{
                Value = value
            };
        }
    }

    public class YearWeek : ValueOf<YearWeek> {
        public Year Year { get; set; }
        public Week Week { get; set; }
    }


    public class AlertsByWeek : IReadModel
    {
        public YearWeek Key{ get; set; }
        public NumberOfPatients NumberOfMalesUnder5{ get; set; }
        public NumberOfPatients NumberOfMalesOver5{ get; set; }
        public NumberOfPatients NumberOfFemalesUnder5{ get; set; }
        public NumberOfPatients NumberOfFemalesOver5{ get; set; }
    }
}

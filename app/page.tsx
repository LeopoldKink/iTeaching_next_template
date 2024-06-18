import { Stats } from '@/components/diagramme/stats';
import Typography from '@mui/material/Typography';

export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=munich&units=metric&appid=UNSER_KEY`;
  //fetch() für request an API mit Parameter 

  return (
    <div>
      <Typography variant="h4">iTeaching - ESPs</Typography>
          <Stats
            data={[
              { name: 'Jan 1', v1: 1, v2: -3 },
              { name: 'Jan 2', v1: 2, v2: -2 },
              { name: 'Jan 3', v1: 0, v2: -1 },
              { name: 'Jan 4', v1: -1, v2: -4 },
              { name: 'Jan 5', v1: -2, v2: -3 },
              { name: 'Jan 6', v1: -3, v2: -5 },
              { name: 'Jan 7', v1: -4, v2: -6 },
              { name: 'Jan 8', v1: -5, v2: -4 },
              { name: 'Jan 9', v1: -6, v2: -7 },
              { name: 'Jan 10', v1: -7, v2: -8 },
              { name: 'Jan 11', v1: -6, v2: -7 },
              { name: 'Jan 12', v1: -5, v2: -4 },
              { name: 'Jan 13', v1: -4, v2: -3 },
              { name: 'Jan 14', v1: -3, v2: -2 },
              { name: 'Jan 15', v1: -2, v2: 1 },
              { name: 'Jan 16', v1: -1, v2: 0 },
              { name: 'Jan 17', v1: 0, v2: 2 },
              { name: 'Jan 18', v1: 1, v2: 3 },
              { name: 'Jan 19', v1: 2, v2: 4 },
              { name: 'Jan 20', v1: 3, v2: 6 },
              { name: 'Jan 21', v1: 4, v2: 3 },
              { name: 'Jan 22', v1: 5, v2: 4 },
              { name: 'Jan 23', v1: 6, v2: 5 },
              { name: 'Jan 24', v1: 7, v2: 6 },
              { name: 'Jan 25', v1: 8, v2: 7 },
              { name: 'Jan 26', v1: 9, v2: 8 },
              { name: 'Jan 27', v1: 10, v2: 6 },
              { name: 'Jan 28', v1: 11, v2: 3 },
              { name: 'Jan 29', v1: 12, v2: 0 },
              { name: 'Jan 30', v1: 13, v2: 2 },
              { name: 'Jan 31', v1: 14, v2: 1 },
            ]}
          />
    </div>
  );
}

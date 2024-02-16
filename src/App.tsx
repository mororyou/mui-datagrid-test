import { DataGrid, GridColDef, GridValueSetterParams } from '@mui/x-data-grid';

function App() {
  const initialRows = [
    {
      id: 1,
      name: 'Damien',
      age: 25,
      isAdmin: true,
      country: 'Spain',
      discount: '',
    },
    {
      id: 2,
      name: 'Nicolas',
      age: 36,
      isAdmin: false,
      country: 'France',
      discount: '',
    },
    {
      id: 3,
      name: 'Kate',
      age: 19,
      isAdmin: false,
      country: 'Brazil',
      discount: 'junior',
    },
  ];
  const columns: GridColDef[] = [
    { field: 'name', type: 'string', editable: true },
    { field: 'age', type: 'number', editable: true },
    {
      field: 'isAdmin',
      type: 'boolean',
      width: 120,
      editable: true,
      valueSetter: (params: GridValueSetterParams) => {
        console.group('');
        console.log(params);
        console.log(params.value);
        console.log(typeof params.value);
        console.log('string?');
        console.groupEnd();
        return {
          ...params.row,
          ['isAdmin']: params.value !== '' && params.value,
        };
      },
    },
    {
      field: 'country',
      type: 'singleSelect',
      width: 120,
      valueOptions: [
        'Bulgaria',
        'Netherlands',
        'France',
        'United Kingdom',
        'Spain',
        'Brazil',
      ],
      editable: true,
    },
  ];
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <DataGrid
        style={{ height: 300, width: '640px' }}
        rows={initialRows}
        columns={columns}
        onCellKeyDown={(params) => {
          console.group('onCellKeyDown');
          console.log(params);
          console.log(params.value);
          console.log(typeof params.value);
          console.groupEnd();
        }}
      />
    </div>
  );
}

export default App;

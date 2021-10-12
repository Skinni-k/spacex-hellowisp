jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')
  return {
    __esModule: true,
    ...originalModule,
    useRouteMatch: () => ({
      path: {
        includes: () => jest.fn(),
      },
    }),
    useHistory: () => ({
      push: jest.fn(),
    }),
    useParams: () => jest.fn(),
    useLocation: () => ({
      pathname: 'localhost:3000/example/path',
    }),
  }
})

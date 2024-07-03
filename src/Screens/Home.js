import AppLayout from '../Components/AppLayout';
import Progress from '../Components/FirstScreen/Progress';
import RecentStudies from "../Components/FirstScreen/RecentStudies";
const Home = () => {
    return (
        <div>
            <AppLayout>
                <div className='flex items-start'>
                    <div className='flex flex-col md:w-[500px]'>
                        <RecentStudies />
                    </div>

                    <div className='flex-w[100%] flex-col gap-2 border-2 md:w-[800px]'>
                        <Progress />
                    </div>
                </div>
            </AppLayout>
        </div>
    );
}

export default Home;

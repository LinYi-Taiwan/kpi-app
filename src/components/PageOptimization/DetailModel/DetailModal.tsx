import PageDetailLineChart from '../Graph/PageDetailLineChart';
import MyRadar from '../Graph/Radar';
import './PageDetailModal.scss';
import { IDetailModal } from '../Type';

const DetailModal = ({ pageName, pageData, averageData, openModal, setOpenModal }: IDetailModal) => {
    const variable = ['CLS', 'FCP', 'FMP', 'LCP', 'SI', 'TBT'];

    return (
        <div className="modal-box" style={{ display: openModal ? 'block' : 'none' }}>
            <div className="page-detail-modal">
                <div className="cancel-icon" onClick={() => setOpenModal(false)}></div>
                <div className="overall">
                    <div className="page-name">{pageName}</div>
                    <div>time select</div>
                    <div className="radar">
                        <MyRadar averageData={averageData}></MyRadar>
                    </div>
                </div>

                <div className="graph-box">
                    {variable.map((item, index) => (
                        <div className="graph-container" key={index}>
                            <div className="graph-text">{item}</div>
                            <div className="graph-content">
                                <PageDetailLineChart pageData={pageData} indicatorName={item}></PageDetailLineChart>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailModal;

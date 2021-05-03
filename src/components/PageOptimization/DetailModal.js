import PageDetailLineChart from './PageDetailLineChart';
import './style/PageDetailModal.css';
const DetailModal = ({ page, pageData, openModal, setOpenModal }) => {
    const variable = ['CLS', 'FCP', 'FMP', 'LCP', 'SI', 'TBT'];
    return (
        <div className="modal-box" style={{ display: openModal ? 'block' : 'none' }}>
            <div className="page-detail-modal">
                <div className="cancel-icon" onClick={() => setOpenModal(false)}></div>

                <div className="main">hello</div>
                <div className="graph-box">
                    {variable.map((item, index) => (
                        <div key={index}>
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

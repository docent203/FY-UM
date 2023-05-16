import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Exhibition from "../../components/Exhibition";
import useModal from "../../components/utils/useModal";

const ExhibitionPage = () => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  const modalContent = {
    type: "default",
    title: "입장 안내",
    content: "PC버전에서만 전시회를 감상할 수 있습니다.",
    callback: goBack,
  };

  useEffect(() => {
    openModal(modalContent);
    return () => closeModal();
  }, []);

  return (
    <>
      <Exhibition />
    </>
  );
};
export default ExhibitionPage;
